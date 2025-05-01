<template>
  <div class="breadcrumb_img breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcumbs_content">
            <h2>FAQ</h2>
            <ol>
              <li>
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="active">FAQ</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Resources Section -->
  <section class="feature_content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <header class="section-header">
            <h3 class="subtitle">HELPFUL RESOURCES</h3>
            <h2 class="title">MyProHelper - Helpful Resources</h2>
            <p class="description">Browse our collection of guides, tutorials, and documentation to help you get the most out of MyProHelper.</p>
          </header>
        </div>
      </div>
  
      <!-- Resource Tabs -->
      <div class="resource_tabs">
        <div class="tabs_header">
          <button 
            :class="['tab_button', activeTab === 'all' ? 'active' : '']" 
            @click="activeTab = 'all'"
          >
            All Resources
          </button>
          <button 
            :class="['tab_button', activeTab === 'videos' ? 'active' : '']" 
            @click="activeTab = 'videos'"
          >
            Videos
          </button>
          <button 
            :class="['tab_button', activeTab === 'images' ? 'active' : '']" 
            @click="activeTab = 'images'"
          >
            Images
          </button>
          <button 
            :class="['tab_button', activeTab === 'other' ? 'active' : '']" 
            @click="activeTab = 'other'"
          >
            Other
          </button>
        </div>
      </div>
  
      <!-- Resource Cards -->
      <div class="row">
        <template v-if="filteredDocuments.length > 0">
          <div v-for="(doc, index) in filteredDocuments" :key="index" class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div class="resource_card">
              <div class="resource_type">
                <div class="icon_wrapper" :class="getIconClass(doc.FileType)">
                  <div v-html="getFileIconSvg(doc.FileType)"></div>
                </div>
                <span class="type_badge" :class="getFileTypeBadgeClass(doc.FileType)">
                  {{ getFileTypeLabel(doc.FileType) }}
                </span>
              </div>
              <h4 class="resource_title">{{ doc.Description }}</h4>
              <a :href="getFileUrl(doc)" target="_blank" class="view_resource_btn">
                View Resource
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </template>
        <div v-else class="col-12 empty_state">
          <div class="empty_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-question">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </div>
          <h3>No resources found</h3>
          <p>Try adjusting your search query</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Help Section -->
  <section class="help_section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="help_card">
            <div class="row">
              <div class="col-md-12">
                <h2>Need Additional Help?</h2>
                <p>Can't find what you're looking for? Our support team is ready to assist you with any questions or issues you might have.</p>
                <div class="help_buttons">
                  <a href="#" class="btn btn-primary">Contact Support</a>
                  <a href="#" class="btn btn-outline">Browse FAQ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import { inject, ref, computed, onMounted } from 'vue';

export default {
  name: 'FAQ',
  inject: ['appSettings'],
  setup() {
    const appSettings = inject('appSettings');
    const searchQuery = ref('');
    const activeTab = ref('all');
    const documents = ref([]);

    // Initialize documents when component is mounted
    onMounted(() => {
      if (appSettings && appSettings.DocumentsToDisplay) {
        documents.value = appSettings.DocumentsToDisplay;
        console.log('Documents loaded:', documents.value);
      } else {
        console.warn('No documents found in appSettings');
      }
    });
    
    // Filter documents based on search query
    const filteredDocuments = computed(() => {
      let filtered = documents.value.filter(doc => 
        doc.Description.toLowerCase().includes(searchQuery.value.toLowerCase())
      );

      // Filter by tab
      if (activeTab.value === 'videos') {
        return filtered.filter(doc => doc.FileType === 2);
      } else if (activeTab.value === 'images') {
        return filtered.filter(doc => doc.FileType === 1);
      } else if (activeTab.value === 'other') {
        return filtered.filter(doc => ![1, 2].includes(doc.FileType));
      }
      
      return filtered;
    });

    // Get file type label
    const getFileTypeLabel = (fileType) => {
      switch(fileType) {
        case 1:
          return 'Image';
        case 2:
          return 'Video';
        case 3:
          return 'PDF';
        case 4:
          return 'Text';
        default:
          return 'Document';
      }
    };

    // Get file type badge class
    const getFileTypeBadgeClass = (fileType) => {
      switch(fileType) {
        case 1:
          return 'badge-blue';
        case 2:
          return 'badge-purple';
        case 3:
          return 'badge-red';
        case 4:
          return 'badge-green';
        default:
          return 'badge-gray';
      }
    };

    // Get icon background class
    const getIconClass = (fileType) => {
      switch(fileType) {
        case 1:
          return 'icon-blue';
        case 2:
          return 'icon-purple';
        case 3:
          return 'icon-red';
        case 4:
          return 'icon-green';
        default:
          return 'icon-gray';
      }
    };

    return { 
      appSettings, 
      documents,
      searchQuery,
      activeTab,
      filteredDocuments,
      getFileTypeLabel,
      getFileTypeBadgeClass,
      getIconClass
    };
  },
  methods: {
    getFileIconSvg(fileType) {
      switch(fileType) {
        case 1: // Image
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>`;
        case 2: // Video
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                    <line x1="7" y1="2" x2="7" y2="22"></line>
                    <line x1="17" y1="2" x2="17" y2="22"></line>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <line x1="2" y1="7" x2="7" y2="7"></line>
                    <line x1="2" y1="17" x2="7" y2="17"></line>
                    <line x1="17" y1="17" x2="22" y2="17"></line>
                    <line x1="17" y1="7" x2="22" y2="7"></line>
                  </svg>`;
        case 3: // PDF
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M9 15h6"></path>
                    <path d="M9 11h6"></path>
                  </svg>`;
        case 4: // Text
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>`;
        default: // Generic document
          return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>`;
      }
    },
    getFileUrl(doc) {
      // Determine if we're in development or production
      const isDevelopment = process.env.NODE_ENV === 'development';
      const staticFilesConfig = isDevelopment 
        ? this.appSettings.StaticFilesDevelopment 
        : this.appSettings.StaticFilesProduction;
      
      // Construct the URL based on the configuration
      return `${staticFilesConfig.StaticFileStartURL}${doc.FileName}`;
    }
  }
};
</script>
  
<style>
.breadcrumb_img {
  margin-top: 85px;
  background-image: url('@/assets/img/about.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
  padding: 100px 0 95px;
  position: relative;
}

/* Section Header */
.section-header {
  text-align: center;
}

.section-header .subtitle {
  font-size: 16px;
  font-weight: 500;
  color: #3498db;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.section-header .title {
  font-size: 32px;
  font-weight: 700;
  color: #013289;
  margin-bottom: 15px;
}

.section-header .description {
  font-size: 16px;
  color: #64748b;
  max-width: 800px;
  /* margin: 0 auto; */
}

/* Resource Tabs */
/* .resource_tabs {
  margin: 30px 0;
} */

.tabs_header {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.tab_button {
  padding: 10px 20px;
  background: #f5f7fa;
  border: none;
  border-radius: 6px;
  color: #4a5568;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab_button:hover {
  background: #e2e8f0;
}

.tab_button.active {
  background: #013289;
  color: white;
}

/* Resource Cards */
.resource_card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
}

.resource_card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.resource_type {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon_wrapper {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.icon-blue {
  background-color: #ebf5ff;
  color: #3b82f6;
}

.icon-purple {
  background-color: #f3effb;
  color: #8b5cf6;
}

.icon-red {
  background-color: #fef2f2;
  color: #ef4444;
}

.icon-green {
  background-color: #ecfdf5;
  color: #22c55e;
}

.icon-gray {
  background-color: #f3f4f6;
  color: #6b7280;
}

.type_badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.badge-blue {
  background-color: #ebf5ff;
  color: #3b82f6;
}

.badge-purple {
  background-color: #f3effb;
  color: #8b5cf6;
}

.badge-red {
  background-color: #fef2f2;
  color: #ef4444;
}

.badge-green {
  background-color: #ecfdf5;
  color: #22c55e;
}

.badge-gray {
  background-color: #f3f4f6;
  color: #6b7280;
}

.resource_title {
  font-size: 18px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 20px;
  flex-grow: 1;
  line-height: 1.4;
}

.view_resource_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #0253b3;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

.view_resource_btn:hover {
  background-color: #013289;
}

.view_resource_btn svg {
  transition: transform 0.3s ease;
}

.view_resource_btn:hover svg {
  transform: translateX(3px);
}

/* Empty State */
.empty_state {
  text-align: center;
  padding: 60px 0;
}

.empty_icon {
  color: #cbd5e1;
  margin-bottom: 20px;
}

.empty_state h3 {
  font-size: 24px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 10px;
}

.empty_state p {
  color: #64748b;
}

/* Help Section */
.help_section {
  background-color: #f8fafc;
  padding: 80px 0;
}

.help_card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
}

.help_card h2 {
  font-size: 28px;
  font-weight: 700;
  color: #013289;
  margin-bottom: 15px;
}

.help_card p {
  color: #4b5563;
  font-size: 16px;
  margin-bottom: 25px;
}

.help_buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn-primary {
  background-color: #013289;
  border-color: #013289;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  transition: all 0.3s ease;
  color: white;
  text-decoration: none;
}

.btn-primary:hover {
  background-color: #012570;
  border-color: #012570;
}

.btn-outline {
  background-color: transparent;
  border: 1px solid #013289;
  color: #013289;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-outline:hover {
  background-color: rgba(1, 50, 137, 0.1);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .section-header .title {
    font-size: 28px;
  }
  
  .help_card {
    padding: 30px;
  }
}
</style>